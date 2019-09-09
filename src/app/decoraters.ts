export function debounce(delay: number = 10): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
      let timeout = null
  
      const original = descriptor.value;
  
      descriptor.value = function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => original.apply(this, args), delay);
      };
  
      return descriptor;
    };
  }