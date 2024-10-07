import { Pipe, PipeTransform } from '@angular/core';
import { Room } from 'src/app/Interfaces/room.interface';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(rooms: Room[], price: number): Room[] {
    if (!rooms || !price) {
      return rooms;
    } else {
      return rooms.filter((room: any) => room.price <= price);
    }
  }
}
