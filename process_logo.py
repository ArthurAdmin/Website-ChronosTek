from PIL import Image, ImageEnhance
import os

# Open the image
img_path = 'img/ChronosTechLogo.jpeg'
img = Image.open(img_path)

print(f"Original image size: {img.size}")
print(f"Original image mode: {img.mode}")

# Convert to RGBA if not already
if img.mode != 'RGBA':
    img = img.convert('RGBA')

# Get the image data
data = img.getdata()
width, height = img.size

# Define threshold for black color
black_threshold = 50

# First, let's find the bounding box of non-black content
# Find the bounding box of non-black pixels
non_black_pixels = []
for y in range(height):
    for x in range(width):
        r, g, b, a = data[y * width + x]
        # Check if pixel is NOT black (or close to black)
        if not (r < black_threshold and g < black_threshold and b < black_threshold):
            non_black_pixels.append((x, y))

if non_black_pixels:
    # Get bounding box of ALL non-black content
    min_x = min(p[0] for p in non_black_pixels)
    max_x = max(p[0] for p in non_black_pixels)
    min_y = min(p[1] for p in non_black_pixels)
    max_y = max(p[1] for p in non_black_pixels)
    
    print(f"All non-black content bounding box: x={min_x}-{max_x}, y={min_y}-{max_y}")
    total_width = max_x - min_x
    
    # Try to find separate objects by looking for gaps in x-axis
    # Create a column projection to find gaps
    columns_with_content = set()
    for x in range(min_x, max_x):
        for y in range(min_y, max_y):
            r, g, b, a = data[y * width + x]
            if not (r < black_threshold and g < black_threshold and b < black_threshold):
                columns_with_content.add(x)
                break
    
    # Find gaps between columns
    sorted_columns = sorted(columns_with_content)
    gaps = []
    for i in range(1, len(sorted_columns)):
        if sorted_columns[i] - sorted_columns[i-1] > 20:  # Gap of more than 20 pixels
            gaps.append((sorted_columns[i-1], sorted_columns[i]))
    
    print(f"Found gaps between content: {gaps}")
    
    # If we find a significant gap, assume it's between logo and text
    # Assume logo is on the LEFT side (smaller x values)
    if gaps:
        # Use the first gap to split - logo should be on the left
        split_x = gaps[0][1]  # End of first object
        logo_max_x = split_x
        
        # Crop just the logo (left side)
        logo_bbox = (min_x, min_y, logo_max_x, max_y)
        img_logo = img.crop(logo_bbox)
        print(f"Logo cropped size: {img_logo.size}")
        img_cropped = img_logo
    else:
        # No clear gap found, use a heuristic - assume logo is about 1/3 of the width
        # or try to detect based on aspect ratio
        estimated_logo_width = int(total_width * 0.35)
        logo_max_x = min_x + estimated_logo_width
        logo_bbox = (min_x, min_y, logo_max_x, max_y)
        img_logo = img.crop(logo_bbox)
        print(f"Logo (estimated) cropped size: {img_logo.size}")
        img_cropped = img_logo
else:
    print("No non-black pixels found!")
    img_cropped = img

# Now remove black background from cropped image
data = img_cropped.getdata()
new_data = []

for item in data:
    r, g, b, a = item
    
    # Check if the pixel is close to black
    if r < black_threshold and g < black_threshold and b < black_threshold:
        # Make it fully transparent
        new_data.append((r, g, b, 0))
    else:
        # Keep the original pixel
        new_data.append(item)

# Create new image with transparent background
img_no_bg = Image.new('RGBA', img_cropped.size)
img_no_bg.putdata(new_data)

# Enhance the image for better quality
# Sharpen the image
enhancer = ImageEnhance.Sharpness(img_no_bg)
img_enhanced = enhancer.enhance(1.5)

# Also enhance contrast slightly
enhancer = ImageEnhance.Contrast(img_enhanced)
img_enhanced = enhancer.enhance(1.1)

# Create public folder if it doesn't exist
if not os.path.exists('public'):
    os.makedirs('public')

# Save as PNG for transparency support
output_path = 'public/ChronosTechLogo.png'
img_enhanced.save(output_path, 'PNG')

print(f"Processed image saved to: {output_path}")
print(f"New image size: {img_enhanced.size}")

# Check the final dimensions
final_width, final_height = img_enhanced.size
print(f"Final Width: {final_width}, Height: {final_height}")
