from .base_processor import Processor
import cv2

class ContourProcessor(Processor):

  def process(self, context):
    contours, _ = cv2.findContours(
      context.image,
      cv2.RETR_EXTERNAL,
      cv2.CHAIN_APPROX_SIMPLE
    )

    context.contours = contours
    return context