import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'osg-select',
    templateUrl: './select.component.html'
})
export class SelectComponent {
    @HostBinding('class') css: string = 'dropdown black-dropdown with-label';
    open: boolean = false;
    selection: string = '';

    @Input() value: any;
    @Output() valueChange: EventEmitter<any> = new EventEmitter();

    @Input() label: string = '';
    private _options: string[];
    @Input() set options(o: string[]){
        this._options = o;
        this.selection = o[0];
    }
    get options(): string[]{
        return this._options;
    }

    @Output() change: EventEmitter<string> = new EventEmitter();

    constructor() { }

    ngOnInit() {
        this.selection = this.options.length ? this.options[0] : '';
    }

    toggle() {
        this.open = !this.open;
    }

    select(o: string) {
        this.selection = o;
        //this.value = o;
        this.valueChange.emit(o);
        this.change.emit(o);
        this.toggle();
    }

}
