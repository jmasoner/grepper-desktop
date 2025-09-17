import json, datetime

def load_config(path):
    with open(path) as f:
        return json.load(f)

def insert_snippet(file_path, tag, snippet):
    marker = f"@insert:{tag}"
    with open(file_path, "r+") as f:
        content = f.read()
        if marker not in content:
            raise Exception("Marker not found")
        updated = content.replace(marker, f"{marker}\n{snippet}")
        f.seek(0)
        f.write(updated)
        f.truncate()

def log_injection(tag, target):
    with open("changelog/insertion-log.txt", "a") as log:
        log.write(f"{datetime.datetime.now()} | {tag} → {target}\n")

def preview_injection(file_path, tag, snippet):
    marker = f"@insert:{tag}"
    with open(file_path, "r") as f:
        content = f.read()
        if marker not in content:
            raise Exception("Marker not found")
        preview = content.replace(marker, f"{marker}\n{snippet}")
        print("\n📄 Preview of Injection:\n" + "-"*40)
        print(preview)
        print("-"*40)