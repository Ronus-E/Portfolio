#!/usr/bin/env bash
#
# versionner.sh — pose les empreintes des ressources dans index.html
#
# POURQUOI CE SCRIPT
# GitHub Pages sert les fichiers avec « cache-control: max-age=600 ». Si
# index.html est a jour mais qu'un script vient du cache (ou l'inverse), la
# page peut afficher un bouton inerte : le balisage attendu par un fichier
# n'est pas celui fourni par l'autre. En ajoutant ?v=<empreinte> a chaque
# ressource, une nouvelle page tire toujours des fichiers coherents avec elle,
# et une ancienne page continue d'utiliser les siens.
#
# USAGE
#   ./versionner.sh        a relancer apres avoir modifie style.css, i18n.js,
#                          script.js ou un fichier de i18n/
#
# Ce script n'est PAS une etape de compilation : le site fonctionne sans lui.
# Il n'ajoute aucune dependance et ne touche qu'aux attributs href et src de
# index.html.

set -euo pipefail

cd "$(dirname "$0")"

if [ ! -f index.html ]; then
  echo "index.html introuvable. Lancez ce script depuis le dossier du portfolio." >&2
  exit 1
fi

RESSOURCES=(
  "style.css"
  "i18n.js"
  "script.js"
  "i18n/en.js"
  "i18n/es.js"
  "i18n/de.js"
)

echo "Empreintes posees dans index.html :"

for f in "${RESSOURCES[@]}"; do
  if [ ! -f "$f" ]; then
    echo "  fichier absent : $f" >&2
    exit 1
  fi

  v=$(md5sum -- "$f" | cut -c1-8)

  # Le point est echappe : « i18n.js » ne doit pas pouvoir correspondre a
  # « i18n/en.js » (ou . serait interprete comme « n'importe quel caractere »).
  motif=${f//./\\.}

  # On retire d'abord une version existante, puis on pose la nouvelle :
  # le script est donc idempotent.
  sed -i -E \
    -e "s|href=\"${motif}(\\?v=[0-9a-f]+)?\"|href=\"$f?v=$v\"|g" \
    -e "s|src=\"${motif}(\\?v=[0-9a-f]+)?\"|src=\"$f?v=$v\"|g" \
    index.html

  printf '  %-14s ?v=%s\n' "$f" "$v"
done

posees=$(grep -c '?v=' index.html || true)
echo
if [ "$posees" -eq "${#RESSOURCES[@]}" ]; then
  echo "Termine : $posees ressources versionnees."
else
  echo "Attention : $posees ressources versionnees pour ${#RESSOURCES[@]} attendues." >&2
  exit 1
fi
