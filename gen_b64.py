import base64
import os

try:
    with open('tutorial.vtt', 'rb') as f:
        vtt_content = f.read()

    b64_vtt = base64.b64encode(vtt_content).decode('utf-8')
    
    # Split into lines of 76 characters
    lines = [b64_vtt[i:i+76] for i in range(0, len(b64_vtt), 76)]
    
    with open('b64.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
        
    print("DONE")
except Exception as e:
    print(f"ERROR: {e}")
