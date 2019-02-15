import {Directive, HostBinding} from "@angular/core";

@Directive({
    selector: '[green-text]'
})

export class GreenTextDirective {
    @HostBinding('style.color') color = 'green';
}
