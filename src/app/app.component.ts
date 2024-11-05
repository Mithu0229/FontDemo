import { Component } from '@angular/core';
// import pdfMake from "pdfmake/build/pdfmake";
import  pdfMake from 'pdfmake/build/pdfmake';
//import  pdfFonts from 'pdfmake/build/vfs_fonts';

// You need to assign pdfFonts to pdfMake to make the fonts available
//(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

pdfMake.fonts = {
  Roboto: {
    normal: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
  },
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'FontDemo';

  generatePdf(){
    let docDifi={
      content:['ভাষা শনাক্ত করুন']
    };

    pdfMake.createPdf(docDifi).open();
  }
}
