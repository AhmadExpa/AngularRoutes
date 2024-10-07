In Angular, you can use `paramMap` to retrieve multiple route parameters in a clean and structured way. The `paramMap` provides a method called `.get()` to access individual parameters by name. If you need to fetch multiple parameters, you can do so by calling `.get()` for each parameter you want.

Here’s an example of how to retrieve multiple route parameters using `paramMap`:

### **Example: Getting Multiple Parameters with `paramMap`**

Imagine you have a URL like this:
```
/booking/:roomId/:guestId
```

Here, both `roomId` and `guestId` are route parameters that you want to extract.

---

### **Routing Configuration**:

First, set up the routes in your **app-routing.module.ts**:

```typescript
const routes: Routes = [
  { path: 'booking/:roomId/:guestId', component: BookingComponent },
];
```

---

### **Component Code to Fetch Multiple Parameters**:

```typescript
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  roomId: number = 0;
  guestId: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Use paramMap to get multiple parameters from the URL
    this.route.paramMap.subscribe((params) => {
      this.roomId = Number(params.get('roomId')); // Get 'roomId'
      this.guestId = Number(params.get('guestId')); // Get 'guestId'
      
      console.log(`Room ID: ${this.roomId}, Guest ID: ${this.guestId}`);
    });
  }
}
```

### **Explanation**:

1. **`this.route.paramMap.subscribe((params)`**:
   - Subscribes to the observable returned by `paramMap` and listens for changes to the route parameters.
   - The `paramMap` provides a method `.get()` to retrieve parameters by name.

2. **`.get('roomId')` and `.get('guestId')`**:
   - `.get()` retrieves the values of `roomId` and `guestId` from the current route.
   - Since parameters are returned as strings, `Number()` is used to convert them to numbers if needed.

3. **Multiple Parameters**:
   - In this example, we retrieve both `roomId` and `guestId` parameters from the URL.

---

### **Sample URL**:
If the URL is `/booking/101/200`, the output in the console would be:
```
Room ID: 101, Guest ID: 200
```

---

### **Handling Optional Parameters**:

If some parameters might be **optional** and not always present in the URL, you can handle that with simple checks:

```typescript
this.route.paramMap.subscribe((params) => {
  const roomId = params.get('roomId');
  const guestId = params.get('guestId');

  if (roomId) {
    this.roomId = Number(roomId);
  }
  
  if (guestId) {
    this.guestId = Number(guestId);
  }
  
  console.log(`Room ID: ${this.roomId}, Guest ID: ${this.guestId}`);
});
```

This way, your code will work even if one or more parameters are missing from the URL.

---

### **Summary**:
- `paramMap` is a clean way to retrieve route parameters, especially when dealing with multiple parameters.
- Use `.get()` to fetch individual parameters by name.
- Ensure type conversions (like `Number()`) if needed, as parameters are returned as strings.

Let me know if you need further clarification!