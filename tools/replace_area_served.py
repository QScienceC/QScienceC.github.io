import os

old_text = '"areaServed": "Global"'
new_text = '''"areaServed": {
  "@type": "Place",
  "name": "Global"
}'''

# Walk through all files in the current directory and subdirectories
for root, _, files in os.walk('.'):
    for filename in files:
        if filename.endswith('.html') or filename.endswith('.json'):
            path = os.path.join(root, filename)
            with open(path, 'r', encoding='utf-8') as file:
                content = file.read()
            if old_text in content:
                updated_content = content.replace(old_text, new_text)
                with open(path, 'w', encoding='utf-8') as file:
                    file.write(updated_content)
                print(f'Updated: {path}')
