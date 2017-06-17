import { Component } from '@angular/core';

@Component({
    template:`
    <main></main>
    <offers></offers>
    <holiday></holiday>
    <adventures></adventures>
    `
})
export class WelcomeComponent {
    public pageTitle: string = 'Welcome';
}
