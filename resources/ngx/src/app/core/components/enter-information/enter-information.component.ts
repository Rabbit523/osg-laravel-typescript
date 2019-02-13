import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'osg-enter-information',
  templateUrl: './enter-information.component.html'
})
export class EnterInformation implements OnInit{
  
  information: StrengthStandardInformation = {
    gender: 'Male'
  };

  genderOptions: string[] = ['Male', 'Female'];
  bodyWeightOptions: string[];
  waistToHipRatioOptions: string[];
  ageOptions: string[];
  strengthLevelsOptions: string[];
  heightOptions: string[];
  muscleFiberOptions: string[];

  onGenderChange(){
    this.bodyWeightOptions = this.getBodyWeightOptions();
    this.waistToHipRatioOptions = this.getWaistToHipRatioOptions();
    this.ageOptions = this.getAgeOptions();
    this.strengthLevelsOptions = this.getStrengthLevelsOptions();
    this.heightOptions = this.getHeightOptions();
    this.muscleFiberOptions = this.getMuscleFiberOptions();
  }

  

  getBodyWeightOptions(): string[]{
    return this.information.gender === 'Male' 
      ? ['0-50', '51-60', '61-70', '71-80', '81-90', '91-100', '101-110', '111-120', '121-160']
      : ['0-40','41-50','51-60','61-70','71-80','81-90','91-100','101-110', '111-130'];
  }

  getWaistToHipRatioOptions(): string[]{
    return this.information.gender === 'Male' 
      ? ['0,71-0,80','0.81-0,90', '0,91-1,00', '1,01-1,10', '1,11-1,20']
      : ['0,61-0,70', '0,71-0,80', '0.81-0,90', '0,91-1,00', '1,01-1,10'];
  }

  getAgeOptions(): string[]{
    return this.information.gender === 'Male' 
      ? ['0-20','21-30','31-40','41-50','51-60','61-80']
      : ['0-20','21-30','31-40','41-50','51-60','61-80'];
  }

  getStrengthLevelsOptions(): string[]{
    return this.information.gender === 'Male' 
      ? ['Untrained','Novice','Intermediate','Advanced', 'Elite']
      : ['Untrained','Novice','Intermediate','Advanced', 'Elite'];
  }

  getHeightOptions(): string[]{
    return this.information.gender === 'Male' 
      ? ['0-150', '151-160', '161-170', '171-180', '181-190', '191-200', '201-210', '211-220']
      : ['0-140','141-150', '151-160', '161-170', '171-180', '181-190', '191-200', '201-210',];
  }

  getMuscleFiberOptions(): string[]{
    return this.information.gender === 'Male' 
      ? ['Slow twitch','Fast twitch', 'Fast and slow twitch']
      : ['Slow twitch','Fast twitch', 'Fast and slow twitch'];
  }

  constructor(){}

  ngOnInit(): void {
      this.onGenderChange();
  }

}

export interface StrengthStandardInformation{
  gender: string;
  bodyWeight?: string;
  height?: string;
  waistHipRatio?: string;
  age?: string;
  muscleFiberType?: string;
}
