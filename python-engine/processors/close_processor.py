from .base_processor import Processor
import cv2
import numpy as np

class CloseProcessor(Processor):

    def process(self, context):
        kernel = np.ones((7,7), np.uint8)

        context.image = cv2.morphologyEx(
            context.image,
            cv2.MORPH_CLOSE,
            kernel
        )

        return context