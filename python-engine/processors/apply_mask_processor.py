from .base_processor import Processor
import cv2

class ApplyMaskProcessor(Processor):

    def process(self, context):
        result = cv2.bitwise_and(
            context.original_image,
            context.original_image,
            mask=context.mask
        )

        context.image = result

        return context