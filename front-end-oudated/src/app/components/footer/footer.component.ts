import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FooterLink {
    label: string;
    url: string;
}

interface FooterSection {
    title: string;
    links: FooterLink[];
}

@Component({
    selector: 'app-footer',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    footerSections: FooterSection[] = [
        {
            title: 'For Customers',
            links: [
                { label: 'Browse Professionals', url: '/browse' },
                { label: 'How It Works', url: '/how-it-works' },
                { label: 'Safety', url: '/safety' }
            ]
        },
        {
            title: 'For Professionals',
            links: [
                { label: 'Join as Professional', url: '/join' },
                { label: 'Resources', url: '/resources' },
                { label: 'Support', url: '/support' }
            ]
        },
        {
            title: 'Company',
            links: [
                { label: 'About Us', url: '/about' },
                { label: 'Contact', url: '/contact' },
                { label: 'Careers', url: '/careers' }
            ]
        }
    ];
}