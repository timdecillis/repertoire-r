from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello():
  return 'foobar'
def run():
  app.run(port=5000)