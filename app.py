#imports
from flask import Flask, render_template

#create a flask app (secret key created when initialize.py is run)
app = Flask(__name__)
f = open( "utils/key", 'r' )
app.secret_key = "hello" #f.read();
f.close()

#the default page is allows you to choose to login or register
@app.route("/")
#PLACEHOLDER CODE ASHER AND CHLOE WILL WORK ON THIS 
#def loginOrRegister():
#    if "status" in session:
#        session.pop("status")
#    if 'username' in session:
#        return render_template("index.html",username = session['username'])
#    else:
#        return render_template("index.html")
        
#run the app
if __name__ == "__main__":
    app.debug = True
    app.run()
