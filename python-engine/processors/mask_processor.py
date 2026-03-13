from .base_processor import Processor
import numpy as np
import cv2

class MaskProcessor(Processor):
  def process(self, context):
    mask = np.zeros(context.image.shape[:2], dtype="uint8")

    cv2.drawContours(
      mask,
      [context.main_contour],
      -1,
      255,
      thickness=cv2.FILLED
    )

    context.mask = mask
    return context

