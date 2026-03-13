
from .base_processor import Processor
import cv2

class CannyProcessor(Processor):

  def __init__(self, low=100, high=200):
    self.low = low
    self.high = high

  def process(self, context):
    gray = cv2.cvtColor(context.image, cv2.COLOR_BGR2GRAY)
    edges = cv2.Canny(gray, self.low, self.high)
    context.image = edges
    return context