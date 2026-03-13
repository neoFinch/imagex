import sys
import shutil
import os
import cv2

from core.image_context import ImageContext
from core.pipeline import Pipeline

from processors.canny_processor import CannyProcessor
from processors.blur_processor import BlurProcessor
from processors.contour_processor import ContourProcessor
from processors.largest_contour_processor import LargestContourProcessor
from processors.mask_processor import MaskProcessor
from processors.apply_mask_processor import ApplyMaskProcessor
from processors.morphology_processor import MorphologyProcessor
from processors.dilate_processor import DilateProcessor
from processors.close_processor import CloseProcessor


from utils.io import load_image, save_image


input_path = sys.argv[1]

# read image
image = load_image(input_path)

context = ImageContext(image)

pipeline = (
  Pipeline(context)
  .add(BlurProcessor())
  .add(CannyProcessor())
  .add(DilateProcessor())
  .add(CloseProcessor())
  .add(ContourProcessor())
  .add(LargestContourProcessor())
  .add(MaskProcessor())
  .add(MorphologyProcessor())
  .add(ApplyMaskProcessor())
)

result = pipeline.run()

output_path = os.path.join("uploads", "edges.png")

save_image(output_path, result.image)

print(output_path)




