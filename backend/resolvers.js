var courseData = [
  {
    id: 'abcd',
    title: 'Lorem Ipsum Dolor Es',
    author: 'Rayed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sollicitudin tortor. Nullam ultricies porta sem vel ultricies. Cras condimentum turpis in lorem rutrum, at pulvinar magna vestibulum. Cras tincidunt suscipit pharetra. Suspendisse eget magna posuere, faucibus mauris sit amet, tincidunt arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et auctor purus, at maximus erat. Pellentesque consectetur ligula ut libero laoreet, vitae ullamcorper ante imperdiet. Ut tempor lorem sit amet suscipit egestas. Quisque eget est sed mauris interdum varius. Donec lobortis, magna et vulputate aliquam, ipsum dui dapibus mauris, in laoreet eros lorem non urna. Mauris orci diam, mattis id varius vitae, consectetur nec lorem.',
    topic: 'NodeJs',
    url:'https://facebook.com',
    voteCount: 0
  },
  {
    id: 'abcde',
    title: 'GraphQL',
    author: 'Rayed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sollicitudin tortor. Nullam ultricies porta sem vel ultricies. Cras condimentum turpis in lorem rutrum, at pulvinar magna vestibulum. Cras tincidunt suscipit pharetra. Suspendisse eget magna posuere, faucibus mauris sit amet, tincidunt arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et auctor purus, at maximus erat. Pellentesque consectetur ligula ut libero laoreet, vitae ullamcorper ante imperdiet. Ut tempor lorem sit amet suscipit egestas. Quisque eget est sed mauris interdum varius. Donec lobortis, magna et vulputate aliquam, ipsum dui dapibus mauris, in laoreet eros lorem non urna. Mauris orci diam, mattis id varius vitae, consectetur nec lorem.',
    topic: 'NodeJs',
    url:'https://facebook.com',
    voteCount: 0
  },
  {
    id: 'abcdef',
    title: 'MongoDB',
    author: 'Rayed',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel sollicitudin tortor. Nullam ultricies porta sem vel ultricies. Cras condimentum turpis in lorem rutrum, at pulvinar magna vestibulum. Cras tincidunt suscipit pharetra. Suspendisse eget magna posuere, faucibus mauris sit amet, tincidunt arcu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent et auctor purus, at maximus erat. Pellentesque consectetur ligula ut libero laoreet, vitae ullamcorper ante imperdiet. Ut tempor lorem sit amet suscipit egestas. Quisque eget est sed mauris interdum varius. Donec lobortis, magna et vulputate aliquam, ipsum dui dapibus mauris, in laoreet eros lorem non urna. Mauris orci diam, mattis id varius vitae, consectetur nec lorem.',
    topic: 'NodeJs',
    url:'https://facebook.com',
    voteCount: 0
  }
];

const resolvers = {
  Query: {
    allCourses:(root,{searchTerm}) => {
      return courseData
    },
    course: (root,{id}) => {
      return courseModel.findOne({id: id});
    }
  },
  Mutation: {
    upVote: (root, {id}) => {
      const course = courseData.filter(res => {return res.id == id})[0];
      course.voteCount++ ;
    },
    downVote: (root, {id}) => {
      const course = courseData.filter(res => {return res.id == id})[0];
      course.voteCount-- ;
    },
    addCourse: (root,{title, author, description, topic, url}) => {
      return null
    }
  }
}

export default resolvers;
