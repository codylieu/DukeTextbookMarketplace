'use strict';

/**
 * @ngdoc function
 * @name dukeTextbookMarketplaceApp.controller:TextbookCtrl
 * @description
 * # TextbookCtrl
 * Controller of the dukeTextbookMarketplaceApp
 */
angular.module('dukeTextbookMarketplaceApp')
  .controller('TextbookCtrl', function ($scope, $location) {

    // Should remain sorted, maybe can change it to do it like ACES by letter
    $scope.departments = ['Computer Science', 'Electrical Engineering', 'Math'];

    // Possible change in implementation, might make it easier to organize and pluck values
    // But it is a huge js object, so maybe keep this representation in database?
    $scope.departments2 = [
      {
        name: 'Computer Science',
        courses: [
          {
            name: 'Compsci 330',
            textbook: {
              name: 'Introduction to Algorithms',
              isbn: '9780262033848',
              course: 'Compsci 330', // Can remove this
              condition: 'Good',
              department: 'Computer Science' // Can remove this too
            }
          },
          {
            name: 'Compsci 316',
            textbook: {
              name: 'Datebase Systems: The Complete Book',
              isbn: '9780131873254',
              course: 'Compsci 316',
              condition: 'Like New',
              department: 'Computer Science'
            }
          }
        ]
      },
      {
        name: 'Electrical Engineering',
        courses: [
          {
            name: 'ECE 280',
            textbook: {
              name: 'Signals and Systems',
              isbn: '9780471164746',
              course: 'ECE 280',
              condition: 'Poor',
              department: 'Electrical Engineering'          
            }
          }
        ]
      },
      {
        name: 'Math',
        courses: [
          {
            name: 'Math 221',
            textbook: {
              name: 'Linear Algebra: A Geometric Approach',
              isbn: '978-1429215213',
              course: 'Math 221',
              condition: 'Like New',
              department: 'Math'
            }
          }
        ]
      }
    ];

    $scope.activeDepartment = 'All';

    $scope.activeCourse = 'All';

    $scope.textbookManager = [
      {
        name: 'Introduction to Algorithms',
        isbn: '978-0262033848',
        course: 'Compsci 330',
        condition: 'Good',
        department: 'Computer Science'
      },
      {
        name: 'Datebase Systems: The Complete Book',
        isbn: '9780131873254',
        course: 'Compsci 316',
        condition: 'Like New',
        department: 'Computer Science'
      },
      {
        name: 'Signals and Systems',
        isbn: '9780471164746',
        course: 'ECE 280',
        condition: 'Poor',
        department: 'Electrical Engineering'
      },
      {
        name: 'Linear Algebra: A Geometric Approach',
        isbn: '978-1429215213',
        course: 'Math 221',
        condition: 'Like New',
        department: 'Math'
      }
    ];

    $scope.displayedCourses = _.pluck($scope.textbookManager, 'course');

    $scope.displayedTextbooks = _.clone($scope.textbookManager);

    $scope.switchDepartment = function (department) {
      if($scope.activeDepartment != department) {
        $scope.activeDepartment = department;
        if($scope.activeDepartment == 'All') {
          $scope.displayedCourses = _.pluck($scope.textbookManager, 'course');
        }
        else {
          $scope.displayedCourses = _.pluck(_.filter($scope.textbookManager, function(textbook) {
            return textbook.department == department;
          }), 'course')
        }
        $scope.switchCourse('All');
      }
    }

    $scope.switchCourse = function (course) {
      $scope.activeCourse = course;
      if($scope.activeCourse == 'All') {
        if($scope.activeDepartment == 'All') {
          $scope.displayedTextbooks = _.clone($scope.textbookManager);
        }
        else {
          $scope.displayedTextbooks = _.filter($scope.textbookManager, function(textbook) {
            return textbook.department == $scope.activeDepartment;
          });
        }
      }
      else {
        $scope.displayedTextbooks = _.filter($scope.textbookManager, function(textbook) {
          return textbook.course == course;
        });
      }
    }

    $scope.showAllCoursesElement = function () {
      return _.size($scope.displayedCourses) > 1;
    }

    $scope.watchTextbook = function (textbook) {

    }

    $scope.goToAccount = function () {
      $location.path('account');
    }
  })