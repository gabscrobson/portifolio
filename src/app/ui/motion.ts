export function slideInFromLeft(duration: number) {
  return {
    hidden: {x: -100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export function slideInFromRight(duration: number) {
  return {
    hidden: {x: 100, opacity: 0},
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export function slideInFromTop(duration: number) {
  return {
    hidden: {y: -100, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}

export function slideInFromBottom(duration: number) {
  return {
    hidden: {y: 100, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: duration,
        ease: 'easeOut'
      }
    }
  }
}