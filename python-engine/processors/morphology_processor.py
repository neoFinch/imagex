from .base_processor import Processor
import cv2
import numpy as np

class MorphologyProcessor(Processor):

    def process(self, context):
        kernel = np.ones((5,5), np.uint8)
        context.mask = cv2.morphologyEx(
            context.mask,
            cv2.MORPH_CLOSE,
            kernel
        )

        return context