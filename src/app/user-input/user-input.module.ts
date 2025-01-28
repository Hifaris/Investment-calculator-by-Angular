import { NgModule } from "@angular/core";
import { UserInputComponent } from "./user-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[UserInputComponent],
    imports:[FormsModule],
    exports:[UserInputComponent]
    // export UserInputComponent because of there was used in other components

})
export class UserInputModule{}