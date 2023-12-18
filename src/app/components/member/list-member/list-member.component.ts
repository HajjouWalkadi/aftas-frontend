import { Component, OnInit } from '@angular/core';
import { Member } from 'src/app/models/member';
import { MemberService } from 'src/app/services/member.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  members: Member[] = [];
  filteredMembers: Member[] = [];
  searchTerm: string = '';

  constructor(private memberService: MemberService, private toastService: ToastService) {}

  showSuccessToast(): void {
    this.toastService.showSuccess('Operation completed successfully.');
  }

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers(): void {
    this.memberService.getAllMembers().subscribe(
      (members) => {
        this.members = members.data;
        this.filterMembers(); // Apply initial filtering
      },
      (error) => console.log(error)
    );
  }

  viewMember(num: number): void {
    console.log(`View member with number ${num}`);
  }

  editMember(num: number): void {
    console.log(`Edit member with number ${num}`);
  }

  // deleteMember(num: number): void {
  //   this.memberService.deleteMember(num).subscribe(
  //     () => {
  //       console.log(`Member with number ${num} deleted successfully.`);
  //       this.showSuccessToast();
  //       this.loadMembers();
  //     },
  //     (error) => {
  //       console.error(`Error deleting member with number ${num}:`, error);
  //     }
  //   );
  // }

  filterMembers(): void {
    const lowerCaseSearchTerm = this.searchTerm.toLowerCase();

    this.filteredMembers = this.members.filter((member) =>
      member.referenceNumber.toString().includes(lowerCaseSearchTerm) ||
      member.name.toLowerCase().includes(lowerCaseSearchTerm) ||
      member.familyName.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }


}
