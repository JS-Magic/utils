export class PerformanceUtils {
  static trackById(_index: number, item: any): string {
    return item.id;
  }

  static trackByKey(_index: number, item: any): string {
    return item.key;
  }

  static trackByIndex(index: number): number {
    return index;
  }
}
