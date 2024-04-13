import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  constructor(private builder: FormBuilder) {}

  ContactForm: FormGroup  = this.builder.group({
    Name: new FormControl('', [Validators.required]),
    Email: new FormControl('', [Validators.required, Validators.email]),
    Service: new FormControl('', [Validators.required ]),
    Message: new FormControl(''),
    
    })
  sentences: string[] = [
    'Safety Gadgets.',
    'Installations.',
    'Maintainance.'
  ];
  currentSentenceIndex = 0;
  currentSentence = '';
  mailDetails: string | any = "";

  ngOnInit(): void {
    this.typeNextSentence();
  }

  typeNextSentence(): void {
    if (this.currentSentenceIndex < this.sentences.length) {
      const sentence = this.sentences[this.currentSentenceIndex];
      this.typeSentence(sentence, 0);
      this.currentSentenceIndex++;
    }
  }

  typeSentence(sentence: string, index: number): void {
    if (index < sentence.length) {
      setTimeout(() => {
        this.currentSentence += sentence.charAt(index);
        this.typeSentence(sentence, index + 1);
      }, 50);
    } else {
      // Sentence typing complete, move to the next sentence
      setTimeout(() => {
        this.currentSentence = '';
        this.typeNextSentence();
      }, 1000);
    }

    if (this.currentSentenceIndex == this.sentences.length) {
      this.currentSentenceIndex = 0
    }
  }

  // emailjs.send("Jays Tech Hub","template_qbj72gl",{
  //   from_name: "Jaystechub",
  //   to_name: "Justin",
  //   message: "Hi, this is just a test",
  //   reply_to: "jaystechub@gmail.com",
  //   });

  async sendEmail() {
    console.log(this.ContactForm.value);
    emailjs.init('8qcR3oXe6XPoyFsa_')
    this.mailDetails = {
      from_name: this.ContactForm.value.Name,
      to_name: "NuelJeff International Limited",
      message: this.ContactForm.value.Message,
      reply_to: this.ContactForm.value.Email,
      subject: this.ContactForm.value.Service
    }
    // emailjs
    //   .sendForm('Jays Tech Hub', 'template_qbj72gl', e.target as HTMLFormElement, {
    //     publicKey: '8qcR3oXe6XPoyFsa_',
        
    //   })

      let response = await emailjs.send("Jays Tech Hub","template_qbj72gl", this.mailDetails);
      alert("Sent");
      this.ContactForm.reset();
      // .then(
      //   () => {
      //     console.log('SUCCESS!');
      //   },
      //   (error) => {
      //     console.log('FAILED...', (error as EmailJSResponseStatus).text);
      //   },
      // );
    }
}
