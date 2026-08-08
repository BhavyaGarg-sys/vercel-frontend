import React from 'react'


const About = () => {
  return (
    <div className='page-background'>
      <h1 className='hero-title'>Your thoughts, organized. <i className="fa-solid fa-note-sticky"></i></h1>
      <div className="card my-4">
        <div className="card-body">
          <h4 className="card-title">What is iNotebook?</h4>
          <p className="card-text">
            iNotebook is a simple and secure note-taking platform designed to help
            you keep track of your ideas, tasks, reminders, and important information.
          </p>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <p>
                <b> <i className="fa-solid fa-circle-plus"></i> Create Notes</b>
                <br />
                Quickly write down ideas and information.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <p>
                <b> <i className="fa-regular fa-pen-to-square"></i> Edit Anytime</b>
                <br />
                Update your notes whenever you need.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row my-4">
        <div className="col-md-8 mx-auto">
          <div className="card">
            <div className="card-body">
              <p>
                <b> <i className="fa-solid fa-lock"></i> Private & Secure</b>
                <br />
                Your notes are associated with your account.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h3 className='my-4'>How it works</h3>
      <div className="row text-center g-3">
        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <span className="badge text-bg-primary mb-3">1</span>
              <h5>Create an account</h5>
              <p>Sign up and create your personal account.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <span className="badge text-bg-primary mb-3">2</span>
              <h5>Add your notes</h5>
              <p>Create and save your important notes.</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card h-100">
            <div className="card-body">
              <span className="badge text-bg-primary mb-3">3</span>
              <h5>Manage your notes</h5>
              <p>Edit or delete your notes whenever you want.</p>
            </div>
          </div>
        </div>
      </div>

      <h3 className="my-4">Built With</h3>
      <div className="mb-5">
        <span className="badge text-bg-success me-2">MongoDB</span>
        <span className="badge text-bg-dark me-2">Express.js</span>
        <span className="badge text-bg-primary me-2">React</span>
        <span className="badge text-bg-secondary">Node.js</span>
      </div>

      <div className="card text-center my-4">
        <div className="card-body p-4">
          <h3>Ready to organize your thoughts?</h3>
          <p className="text-muted">
            Start creating and managing your notes today.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
