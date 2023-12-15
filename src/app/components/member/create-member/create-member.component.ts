import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IdentityDocumentType } from 'src/app/models/IdentityDocumentType';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';

@Component({
  selector: 'app-create-member',
  templateUrl: './create-member.component.html',
  styleUrls: ['./create-member.component.css']
})
export class CreateMemberComponent {
  newMember: Member = {
    referenceNumber: 0,
    name: '',
    familyName: '',
    accessionDate: new Date(),
    nationality: '',
    IdentityDocumentType: IdentityDocumentType.CIN, 
    identityNumber: ''
  };

  identityDocumentTypes = Object.values(IdentityDocumentType);

  constructor(private memberService: MemberService, private router: Router) {}

  createMember(): void {
    this.memberService.saveMember(this.newMember).subscribe(
      (createdMember) => {
        console.log('Member created successfully:', createdMember);
       
        this.router.navigate(['/members']);
      },
      (error) => {
        console.error('Error creating member:', error);
      }
    );
  }


}
