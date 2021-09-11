npm pack && \
tar -vxf react-vocabulary-trainer-0.1.0.tgz && \
pushd package && \
npm link && \
popd && \
npm link react-vocabulary-trainer
