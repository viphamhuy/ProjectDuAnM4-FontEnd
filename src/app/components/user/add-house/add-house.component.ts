import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ComponentsService} from '../../components.service';

@Component({
  selector: 'app-add-house',
  templateUrl: './add-house.component.html',
  styleUrls: ['./add-house.component.scss']
})
export class AddHouseComponent implements OnInit {

  categoryHouseList: any[];
  categoryRoomList: any[];
  formGroup = new FormGroup({
    tenNha: new FormControl(),
    diaChi: new FormControl(),
    soLuongPhongNgu:  new FormControl(),
    soLuongPhongTam:  new FormControl(),
    moTaChung:  new FormControl(),
    giaTienTheoDem:  new FormControl(),
    trangThai: new FormControl(),
    categoryHouseId: new FormControl(),
    categoryRoomId: new FormControl()
  });
  message = '';
  isShow = false;
  isSuccess = true;
  isLoading = false;
  constructor(private componentsService: ComponentsService) { }

  ngOnInit(): void {
    this.componentsService.listCategoryHouse().subscribe( result => {
      this.categoryHouseList = result;
    });
    this.componentsService.listCategoryRoom().subscribe( result1 => {
      this.categoryRoomList = result1;
    });
  }
  save() {
    this.isLoading = true;
    const tenNha = this.formGroup.get('tenNha').value;
    const diaChi = this.formGroup.get('diaChi').value;
    const soLuongPhongNgu = this.formGroup.get('soLuongPhongNgu').value;
    const soLuongPhongTam = this.formGroup.get('soLuongPhongTam').value;
    const moTaChung = this.formGroup.get('moTaChung').value;
    const giaTienTheoDem = this.formGroup.get('giaTienTheoDem').value;
    const trangThai = this.formGroup.get('trangThai').value;
    const categoryHouseId = this.formGroup.get('categoryHouseId').value;
    const categoryRoomId = this.formGroup.get('categoryRoomId').value;
    this.componentsService.addHouse(tenNha, diaChi,
      soLuongPhongNgu, soLuongPhongTam, moTaChung, giaTienTheoDem, trangThai, categoryHouseId, categoryRoomId).subscribe( result => {
      this.isShow = true;
      this.isSuccess = true;
      this.message = 'Thêm thành công!';
      this.formGroup.reset();
    }, error => {
      this.isShow = true;
      this.isSuccess = false;
      this.message = 'Thêm thất bại!';
      this.isLoading = false;
      this.formGroup.reset();
    });
  }
}
