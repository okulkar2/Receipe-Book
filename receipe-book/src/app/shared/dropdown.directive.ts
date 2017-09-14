import { Directive, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})

export class DropdownDirective{

    coonstructor() {}

    @HostBinding('class.open') isOpen: boolean;

    @HostListener('click') openDropdown(){
        this.isOpen = !this.isOpen;
    }
} 