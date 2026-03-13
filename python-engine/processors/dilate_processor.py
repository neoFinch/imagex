from .base_processor import Processor
import cv2
import numpy as np

class DilateProcessor(Processor):

    def process(self, context):
        kernel = np.ones((5,5), np.uint8)

        context.image = cv2.dilate(context.image, kernel, iterations=2)

        return context