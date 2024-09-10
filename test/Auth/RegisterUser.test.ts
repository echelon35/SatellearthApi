// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ReactiveFormsModule } from '@angular/forms';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { UserRegisterComponent } from '@/Modules/UserModule/Components/user-register/user-register.component';
// import { UserService } from '@/Services/user.service';
// import { of, throwError } from 'rxjs';

// describe('UserRegisterComponent', () => {
//   let component: UserRegisterComponent;
//   let fixture: ComponentFixture<UserRegisterComponent>;
//   let userService: jasmine.SpyObj<UserService>;

//   beforeEach(async () => {
//     const userServiceSpy = jasmine.createSpyObj('UserService', ['register']);

//     await TestBed.configureTestingModule({
//       declarations: [ UserRegisterComponent ],
//       imports: [ ReactiveFormsModule, HttpClientTestingModule ],
//       providers: [
//         { provide: UserService, useValue: userServiceSpy }
//       ]
//     }).compileComponents();

//     fixture = TestBed.createComponent(UserRegisterComponent);
//     component = fixture.componentInstance;
//     userService = TestBed.inject(UserService) as jasmine.SpyObj<UserService>;
//     fixture.detectChanges();
//   });

//   it('devrait afficher une erreur si le pseudo existe déjà', () => {
//     const errorResponse = { error: { message: 'Ce pseudo est déjà utilisé' } };
//     userService.register.and.returnValue(throwError(() => errorResponse));

//     component.registerForm.setValue({
//       pseudo: 'existingPseudo',
//       email: 'test@example.com',
//       password: 'password123',
//       confirmPassword: 'password123'
//     });

//     component.onSubmit();

//     expect(component.errorMessage).toBe('Ce pseudo est déjà utilisé');
//   });

//   it('devrait afficher une erreur si l\'email existe déjà', () => {
//     const errorResponse = { error: { message: 'Cet email est déjà utilisé' } };
//     userService.register.and.returnValue(throwError(() => errorResponse));

//     component.registerForm.setValue({
//       pseudo: 'newPseudo',
//       email: 'existing@example.com',
//       password: 'password123',
//       confirmPassword: 'password123'
//     });

//     component.onSubmit();

//     expect(component.errorMessage).toBe('Cet email est déjà utilisé');
//   });

//   it('devrait réussir l\'inscription avec des données valides', () => {
//     const successResponse = { message: 'Inscription réussie' };
//     userService.register.and.returnValue(of(successResponse));

//     component.registerForm.setValue({
//       pseudo: 'newPseudo',
//       email: 'new@example.com',
//       password: 'password123',
//       confirmPassword: 'password123'
//     });

//     component.onSubmit();

//     expect(userService.register).toHaveBeenCalledWith({
//       pseudo: 'newPseudo',
//       email: 'new@example.com',
//       password: 'password123'
//     });
//     expect(component.successMessage).toBe('Inscription réussie');
//   });
// });
