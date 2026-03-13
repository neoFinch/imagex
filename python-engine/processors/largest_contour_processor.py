from .base_processor import Processor
import cv2

class LargestContourProcessor(Processor):

  def process(self, context):
    largest = max(context.contours, key=cv2.contourArea)
    context.main_contour = largest
    return context