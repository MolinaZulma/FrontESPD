import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvailableViewsService {
  constructor() { }

  public canSeeList(componentName: string): boolean {
    return this.canSee(componentName, ListType.SeeList);
  }

  public canSeeComponent(componentName: string): boolean {
    return this.canSee(componentName, ListType.SeeComponent);
  }

  private canSee(componentName: string, listType: ListType): boolean {
    const roleComponent = this.findRoleComponent(componentName);
    if (roleComponent) {
      const userRoles = this.getUserRoles();
      return userRoles.some((role: string) => roleComponent[listType].includes(role));
    }
    return false;
  }

  private findRoleComponent(componentName: string): RoleControlComponent | undefined {
    return this.getListComponents().find(role => role.componentName === componentName);
  }

  private getUserRoles(): string[] {
    const userInfo = sessionStorage['userInfo'];
    if (userInfo) {
      try {
        const roles = JSON.parse(userInfo).roles;
        return Array.isArray(roles) ? roles : [];
      } catch (error) {
        console.error('Error parsing user roles:', error);
      }
    }
    return [];
  }

  private getListComponents(): RoleControlComponent[] {
    return [
      { componentName: 'waterControll', seeComponent: [EnumRoles.Administrator.toString(), EnumRoles.Ptap.toString()], seeList: [EnumRoles.Administrator.toString()] },
      { componentName: 'activityRegister', seeComponent: [EnumRoles.Administrator.toString(), EnumRoles.Ptap.toString()], seeList: [EnumRoles.Administrator.toString()] },
      { componentName: 'jardFormat', seeComponent: [EnumRoles.Administrator.toString(), EnumRoles.Ptap.toString(), EnumRoles.Ptar.toString()], seeList: [EnumRoles.Administrator.toString()] },
      { componentName: 'ptapFormat', seeComponent: [EnumRoles.Administrator.toString(), EnumRoles.Ptap.toString(), EnumRoles.Ptar.toString()], seeList: [EnumRoles.Administrator.toString()] },
      { componentName: 'users', seeComponent: [EnumRoles.Administrator.toString()], seeList: [EnumRoles.Administrator.toString()] },
      { componentName: 'damageReport', seeComponent: [EnumRoles.Administrator.toString()], seeList: [EnumRoles.Administrator.toString()] },
    ];
  }
}

interface RoleControlComponent {
  componentName: string;
  seeComponent: string[];
  seeList: string[];
}

enum ListType {
  SeeList = 'seeList',
  SeeComponent = 'seeComponent',
}

export enum EnumRoles {
  Ptap = 'Ptap',
  Ptar = 'Ptar',
  User = 'User',
  Administrator = 'Administrator',
}
