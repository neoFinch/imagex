class ImageContext:
    def __init__(self, image):
      self.image = image
      self.contours = None
      self.main_contour = None
      self.mask = None
      self.original_image = image