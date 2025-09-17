import json
from utils import insert_snippet, log_injection

with open("fallback/fallback-queue.json") as f:
    queue = json.load(f)

new_queue = []
for entry in queue:
    try:
        insert_snippet(f"targets/{entry['target']}", entry["tag"], entry["snippet"])
        log_injection(entry["tag"], entry["target"])
        print(f"✅ Retried: {entry['tag']} → {entry['target']}")
    except Exception as e:
        print(f"❌ Retry failed: {entry['tag']} → {e}")
        new_queue.append(entry)

with open("fallback/fallback-queue.json", "w") as f:
    json.dump(new_queue, f, indent=2)