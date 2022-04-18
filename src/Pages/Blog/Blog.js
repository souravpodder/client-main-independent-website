import React from 'react';

const Blog = () => {
  return (
    <div className='container py-5'>
      <h5>Question 1: Difference between authorization and authentication</h5>
      <p>Answer: Authentication is confirming the visitor's own identity, while authorization means giving permission to the various features of the system. Authentication is process of validating  your credentials for example: User ID and password to verify identity. On the other hand authorization grants some special control of the system to the authorized person.For example, If an employee is verified by Id and password authentication, the next step would be authorization which indicates what resources the employee will have access to.</p>

      <h5>Question 2: Why are you using firebase? What other options do you have to implement authentication?</h5>

      <p>I am using firebase for user authentication and website hosting. Firebase is lightweight and easy to manage . Firebase makes it quite user friendly to control the authentication system.Back4App, AWS Amplify, Supabase, Keycloak, PingIdentity etc. can be used as other options for user authentication.</p>

      <h5>Question 3: What other services does firebase provide other than authentication?</h5>
      <p>1.Google Analytics:  It can become helpful in tracking user demographics, behavior, purchasing patterns, revenue reports.</p>
      <p>2.Hosting: You can host your website using firebase</p>
      <p>3.Cloud Storage:  You can use firebse as cloud storage</p>
      <p>4.Cloud Messaging:Firebase is a great tool to implement notifications, irrespective of the platform</p>
    </div>
  );
};

export default Blog;