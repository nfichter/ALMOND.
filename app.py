#imports
from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")


#run the app
if __name__ == "__main__":
    app.debug = True
    app.run()