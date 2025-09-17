import os, json, datetime
from utils import load_config, log_injection, insert_snippet, preview_injection

def main():
    config = load_config("config/tag-map.json")
    tag = input("Tag: ").strip()
    snippet = input("Snippet:\n").strip()

    if tag not in config:
        print("❌ Tag not found.")
        return

    target_path = f"targets/{config[tag]}"
    try:
        preview_injection(target_path, tag, snippet)
        confirm = input("Proceed with injection? (Y/N): ").strip().lower()
        if confirm == "y":
            insert_snippet(target_path, tag, snippet)
            log_injection(tag, config[tag])
            print(f"✅ Injected into {config[tag]}")
        else:
            print("🛑 Injection cancelled.")
    except Exception as e:
        print(f"⚠️ Injection failed: {e}")
        log_fallback(tag, snippet, config[tag], str(e))

def log_fallback(tag, snippet, target, error):
    entry = {
        "timestamp": str(datetime.datetime.now()),
        "tag": tag,
        "snippet": snippet,
        "target": target,
        "error": error
    }
    path = "fallback/fallback-queue.json"
    queue = []
    if os.path.exists(path):
        with open(path) as f:
            queue = json.load(f)
    queue.append(entry)
    with open(path, "w") as f:
        json.dump(queue, f, indent=2)

if __name__ == "__main__":
    main()