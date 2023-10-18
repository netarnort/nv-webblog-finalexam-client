import Vue from 'vue'
import Router from 'vue-router'
import CoursesIndex from '@/components/Users/Index'
import CoursesEdit from '@/components/Users/EditUser'
import CoursesShow from '@/components/Users/ShowUser'
import CousesCreate from '@/components/Users/CreateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/course/create',
      name: 'course-create',
      component: CousesCreate
    },
    {
      path: '/course/:courseId',
      name: 'courses-edit',
      component: CoursesEdit
    },
    {
      path: '/course/:courseId',
      name: 'coruses',
      component: CoursesShow
    },
    {
      path: '/courses',
      name: 'courses',
      component: CoursesIndex
    },

    

  ]
})
