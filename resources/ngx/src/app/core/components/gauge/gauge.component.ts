import { Component, Input, ViewChild, ElementRef, HostBinding } from '@angular/core';

@Component({
    selector: 'osg-gauge',
    templateUrl: './gauge.component.html'
})
export class GaugeComponent {

    @HostBinding('class') cssClass;
    @ViewChild('path') path: ElementRef;

    @Input() value: number = 0;
    @Input() opacity: number = 0.4;
    @Input() set css(cssClass: string) {
        if (cssClass)
            this.cssClass = cssClass;
    }
    ngAfterViewInit() {
        setTimeout(() => this.path.nativeElement.style = `stroke-dasharray: ${this.value}px 100px`, 100);
    }

}
