import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (

          <div className="my-20" >

          <form >
              <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-10">
                  <input type="email" class="form-control" id="inputEmail3" placeholder="Email"/>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-10">
                  <input type="password" class="form-control" id="inputPassword3" placeholder="Password"/>
                </div>
              </div>
              <fieldset class="form-group">
                
              </fieldset>
              <div class="form-group row">
                <div class="col-sm-2"></div>
                <div class="col-sm-10">
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="gridCheck1"/>
                    <label class="form-check-label" for="gridCheck1">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <div class="col-sm-10">
                  <button type="submit" class="btn btn-primary">Sign in</button>
                </div>
              </div>
</form>

          </div>
            
        );
    }
}

export default Login;