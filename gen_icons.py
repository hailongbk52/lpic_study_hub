import struct
import zlib
import os

def create_png(size):
    """Create a simple PNG icon with navy/blue gradient and J letter."""
    pixels = []
    r1, g1, b1 = 26, 26, 46    # dark navy
    r2, g2, b2 = 74, 144, 217  # blue

    for y in range(size):
        row = []
        for x in range(size):
            t = (x + y) / (size * 2)
            r = int(r1 + (r2 - r1) * t)
            g = int(g1 + (g2 - g1) * t)
            b = int(b1 + (b2 - b1) * t)
            cx, cy = size // 2, size // 2
            dist = ((x - cx) ** 2 + (y - cy) ** 2) ** 0.5
            radius = size * 0.35
            if dist < radius:
                factor = 1.5
                r = min(255, int(r * factor))
                g = min(255, int(g * factor))
                b = min(255, int(b * factor))
            elif dist < radius + size * 0.03:
                r, g, b = 255, 255, 255
            lx = x - cx
            ly = y - cy
            bw = max(1, size // 12)
            bh = size // 2
            if (abs(lx) < bh // 2.5 and abs(ly + bh // 4) < bw):
                r, g, b = 255, 255, 255
            elif (abs(lx - bw * 1.5) < bw and ly > -bh // 4 and ly < bh // 3):
                r, g, b = 255, 255, 255
            elif (ly > bh // 6 and abs(lx - bw * 0.5) < bw * 1.8 and ly < bh // 3 + bw):
                r, g, b = 255, 255, 255
            row.append((r, g, b))
        pixels.append(row)

    def make_chunk(chunk_type, data):
        length = struct.pack('>I', len(data))
        crc = zlib.crc32(chunk_type + data) & 0xffffffff
        return length + chunk_type + data + struct.pack('>I', crc)

    ihdr_data = struct.pack('>IIBBBBB', size, size, 8, 2, 0, 0, 0)
    ihdr = make_chunk(b'IHDR', ihdr_data)
    raw = b''
    for row in pixels:
        raw += b'\x00'
        for (r, g, b) in row:
            raw += bytes([r, g, b])
    compressed = zlib.compress(raw, 9)
    idat = make_chunk(b'IDAT', compressed)
    iend = make_chunk(b'IEND', b'')
    return b'\x89PNG\r\n\x1a\n' + ihdr + idat + iend

sizes = [72, 96, 128, 144, 152, 192, 384, 512]
icons_dir = r"c:\Users\longvh3\Downloads\jncia_antigravity\icons"
os.makedirs(icons_dir, exist_ok=True)

for size in sizes:
    png_data = create_png(size)
    filepath = os.path.join(icons_dir, f"icon-{size}.png")
    with open(filepath, 'wb') as f:
        f.write(png_data)
    print(f"Created: icon-{size}.png")

print("All icons generated!")
