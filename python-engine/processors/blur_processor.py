import cv2
from .base_processor import Processor

class BlurProcessor(Processor):
  
  def process(self, context):
    context.image = cv2.GaussianBlur(context.image, (5,5), 0)
    return context