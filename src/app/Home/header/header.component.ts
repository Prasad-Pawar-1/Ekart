import { Component, HostListener, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isNavbarOpen = false;

  // Toggle the navbar open/close
  toggleNavbar(event: Event) {
    // Prevent the click event from bubbling up to parent elements
    event.stopPropagation();
    this.isNavbarOpen = !this.isNavbarOpen;
  }

  // Close navbar if user clicks anywhere outside the navbar
  @HostListener('document:click', ['$event'])
  closeNavbarOnClickOutside(event: Event) {
    const target = event.target as Element;
    if (this.isNavbarOpen && !target.closest('.navbar') && !target.closest('.navbar-toggler')) {
      this.isNavbarOpen = false;
    }
  }

  // Method to prevent navbar from closing when clicked inside
  onNavbarClick(event: Event) {
    // Prevent the click from propagating further
    event.stopPropagation();
  }

  ngOnInit() {
    // Initialization logic here (if needed)
  }

  ngOnDestroy() {
    // Cleanup logic here (if needed)
  }
}
