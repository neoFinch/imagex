class Pipeline:
  def __init__(self, context):
    self.context = context
    self.steps = []

  def add(self, processor):
    self.steps.append(processor)
    return self

  def run(self):
    for step in self.steps:
      self.context = step.process(self.context)

    return self.context