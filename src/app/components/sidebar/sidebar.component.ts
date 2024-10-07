import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() collapsed = new EventEmitter<boolean>(); // Emit the collapsed state

  // Track sidebar state (collapsed or expanded)
  isCollapsed: boolean = false;

  // Function to toggle sidebar state and emit the value
  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed); // Emit the updated state
    // console.log(this.isCollapsed);
  }
}
